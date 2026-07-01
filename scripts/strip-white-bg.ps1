param(
    [Parameter(Mandatory=$true)][string]$Path,
    [int]$Threshold = 12
)

Add-Type -TypeDefinition @"
using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.Collections.Generic;

public static class WhiteStripper
{
    public static void Strip(string path, int threshold)
    {
        Bitmap src = new Bitmap(path);
        int w = src.Width, h = src.Height;
        Bitmap dst = new Bitmap(w, h, PixelFormat.Format32bppArgb);

        Rectangle rect = new Rectangle(0, 0, w, h);
        BitmapData srcData = src.LockBits(rect, ImageLockMode.ReadOnly, PixelFormat.Format32bppArgb);
        BitmapData dstData = dst.LockBits(rect, ImageLockMode.WriteOnly, PixelFormat.Format32bppArgb);

        int stride = srcData.Stride;
        int bytes = stride * h;
        byte[] srcBuf = new byte[bytes];
        byte[] dstBuf = new byte[bytes];
        System.Runtime.InteropServices.Marshal.Copy(srcData.Scan0, srcBuf, 0, bytes);
        Array.Copy(srcBuf, dstBuf, bytes);

        bool[] visited = new bool[w * h];
        Queue<int> q = new Queue<int>();

        Func<int,int,bool> isNearWhite = (x, y) =>
        {
            int idx = y * stride + x * 4;
            byte b = srcBuf[idx];
            byte g = srcBuf[idx + 1];
            byte r = srcBuf[idx + 2];
            byte a = srcBuf[idx + 3];
            if (a < 10) return true; // already transparent
            return (255 - r) <= threshold && (255 - g) <= threshold && (255 - b) <= threshold;
        };

        Action<int,int> enqueue = (x, y) =>
        {
            if (x < 0 || x >= w || y < 0 || y >= h) return;
            int pos = y * w + x;
            if (visited[pos]) return;
            if (!isNearWhite(x, y)) return;
            visited[pos] = true;
            q.Enqueue(pos);
        };

        for (int x = 0; x < w; x++) { enqueue(x, 0); enqueue(x, h - 1); }
        for (int y = 0; y < h; y++) { enqueue(0, y); enqueue(w - 1, y); }

        while (q.Count > 0)
        {
            int pos = q.Dequeue();
            int x = pos % w;
            int y = pos / w;
            int idx = y * stride + x * 4;
            dstBuf[idx + 3] = 0; // alpha = 0

            enqueue(x + 1, y);
            enqueue(x - 1, y);
            enqueue(x, y + 1);
            enqueue(x, y - 1);
        }

        System.Runtime.InteropServices.Marshal.Copy(dstBuf, 0, dstData.Scan0, bytes);
        src.UnlockBits(srcData);
        dst.UnlockBits(dstData);
        src.Dispose();

        dst.Save(path, ImageFormat.Png);
        dst.Dispose();
    }
}
"@ -ReferencedAssemblies System.Drawing.dll

[WhiteStripper]::Strip($Path, $Threshold)
Write-Output "Stripped: $Path"
