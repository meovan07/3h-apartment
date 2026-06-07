import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = '3H Apartment Da Nang'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image({ params }: { params: { locale: string } }) {
  const isVi = params.locale === 'vi'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          background: '#053f43',
        }}
      >
        {/* Background photo */}
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.28,
          }}
        />

        {/* Gradient */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(5,63,67,0.55) 0%, rgba(5,63,67,0.92) 100%)',
          }}
        />

        {/* Content */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '72px 80px',
            width: '100%',
            gap: 0,
          }}
        >
          {/* Logo mark */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 56,
              height: 56,
              borderRadius: 12,
              background: '#02ab82',
              marginBottom: 24,
            }}
          >
            <span style={{ color: '#fff', fontSize: 22, fontWeight: 800 }}>3H</span>
          </div>

          {/* Eyebrow */}
          <span
            style={{
              color: '#02ab82',
              fontSize: 15,
              fontWeight: 600,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              marginBottom: 14,
            }}
          >
            {isVi ? 'Đà Nẵng · Việt Nam' : 'Da Nang · Vietnam'}
          </span>

          {/* Headline */}
          <span
            style={{
              color: '#ffffff',
              fontSize: 62,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-1.5px',
              marginBottom: 18,
            }}
          >
            3H Apartment
          </span>

          {/* Sub */}
          <span
            style={{
              color: 'rgba(255,255,255,0.72)',
              fontSize: 24,
              fontWeight: 400,
              marginBottom: 32,
            }}
          >
            {isVi
              ? 'Studio riêng tư · 1 km từ biển Mỹ Khê'
              : 'Private studios · 1 km from My Khe Beach'}
          </span>

          {/* Pills */}
          <div style={{ display: 'flex', gap: 14 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                background: 'rgba(2,171,130,0.18)',
                border: '1.5px solid rgba(2,171,130,0.5)',
                borderRadius: 8,
                padding: '10px 22px',
                color: '#02ab82',
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              {isVi ? 'Từ 500.000 ₫ / đêm' : 'From 500,000 VND / night'}
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                background: 'rgba(255,255,255,0.07)',
                border: '1.5px solid rgba(255,255,255,0.15)',
                borderRadius: 8,
                padding: '10px 22px',
                color: 'rgba(255,255,255,0.6)',
                fontSize: 16,
                fontWeight: 500,
              }}
            >
              3hapartment.vn
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
