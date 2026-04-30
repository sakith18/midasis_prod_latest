/**
 * Midasis brand logo (real PNG: globe + MIDASIS wordmark + tagline).
 *
 * Image natural size: 1938×1041.
 * Content map (measured from PNG):
 *   • Globe + MIDASIS wordmark : y = 13.4% → 67.0%
 *   • Tagline                  : y = 72.0% → 78.4%
 *
 * We crop the top whitespace and the tagline by displaying a window
 * of the image from y=10% to y=70% (showing only globe + wordmark).
 */
const IMG_W = 1938;
const IMG_H = 1041;
const CROP_TOP = 0.10;     // remove top 10% (whitespace before globe)
const CROP_BOTTOM = 0.30;  // remove bottom 30% (tagline + bottom whitespace)
const VISIBLE_FRAC = 1 - CROP_TOP - CROP_BOTTOM; // 0.60

export const Logo = ({ variant = "dark", size = "default" }) => {
    const visibleH = {
        sm: 56,        // mobile sheet header
        default: 76,   // navbar
        lg: 100,       // footer
    }[size] || 76;

    // Total image render height needed so that the visible band == visibleH
    const imgH = visibleH / VISIBLE_FRAC;
    const imgW = imgH * (IMG_W / IMG_H);
    const offsetTop = -(CROP_TOP * imgH);

    return (
        <div
            className="relative flex-shrink-0 overflow-hidden"
            style={{ height: `${visibleH}px`, width: `${imgW}px` }}
            data-testid="midasis-logo"
            role="img"
            aria-label="Midasis Technologies"
        >
            <img
                src="/midasis-logo.png"
                alt=""
                aria-hidden="true"
                draggable={false}
                style={{
                    height: `${imgH}px`,
                    width: `${imgW}px`,
                    marginTop: `${offsetTop}px`,
                }}
                className={`block max-w-none select-none ${
                    variant === "light" ? "brightness-110" : ""
                }`}
            />
        </div>
    );
};

export default Logo;
