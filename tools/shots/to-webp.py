#!/usr/bin/env python3
"""Convert shots/*.png to WebP and drop the PNGs.

Every file in shots/ is base64-embedded into the single-file guide, so the cost
of a capture is roughly 4/3 of its size on disk. PNG is the wrong format for
this: these are flat-colour UI screenshots with text, and WebP holds the text
crisp at a fraction of the bytes.

Run from the repo root or from tools/shots - either works:

    python tools/shots/to-webp.py            # convert, keep a .png.bak of each
    python tools/shots/to-webp.py --quality 90
    python tools/shots/to-webp.py --clean    # delete the .bak files afterwards

assemble.mjs and capture.mjs both already recognise .webp, so nothing else
needs to change.
"""

import argparse
import pathlib
import sys

try:
    from PIL import Image
except ImportError:
    sys.exit("Pillow is not installed. Run: python -m pip install pillow")

ROOT = pathlib.Path(__file__).resolve().parents[2]
SHOTS = ROOT / "shots"


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--quality", type=int, default=88)
    ap.add_argument("--clean", action="store_true", help="remove the .png.bak files")
    args = ap.parse_args()

    if args.clean:
        n = 0
        for bak in SHOTS.glob("*.png.bak"):
            bak.unlink()
            n += 1
        print(f"  removed {n} backup file(s)")
        return 0

    pngs = sorted(SHOTS.glob("*.png"))
    if not pngs:
        print("  no PNGs in shots/ - nothing to do")
        return 0

    before = after = 0
    for png in pngs:
        webp = png.with_suffix(".webp")
        with Image.open(png) as im:
            im = im.convert("RGB")
            im.save(webp, "WEBP", quality=args.quality, method=6)

        b, a = png.stat().st_size, webp.stat().st_size
        before += b
        after += a
        print(f"  {png.name:26} {b/1024:6.0f}KB -> {a/1024:6.0f}KB  ({a/b:.0%})")

        # Keep the PNG as a .bak until the result has been eyeballed. --clean
        # removes them; they are gitignored either way.
        png.rename(png.with_suffix(".png.bak"))

    print(f"\n  {len(pngs)} file(s): {before/1024:.0f}KB -> {after/1024:.0f}KB "
          f"({after/before:.0%}), embedded saving about "
          f"{(before - after) * 1.37 / 1024 / 1024:.1f}MB")
    print("  Next: node build/assemble.mjs")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
