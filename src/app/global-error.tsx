'use client'

import { domAnimation, LazyMotion } from 'framer-motion'
import { useEffect } from 'react'

// import { captureException } from '@sentry/nextjs'
import { NormalContainer } from '~/components/layout/container/Normal'
import { StyledButton } from '~/components/ui/button'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
    window.location.href = 'https://bemly.top'
    // captureException(error)
  }, [error])
  return (
    <html>
      <head>
        <title>呜呜呜~服务器走丢了</title>
      </head>
      <body>
        <NormalContainer>
          <h1 className="mb-4">诶哟，服务器怎么 DOWN 掉惹，还是看看远处的静态网站吧</h1>
          <div className="flex justify-center">
            <LazyMotion features={domAnimation}>
              <StyledButton onClick={() => location.reload()}>
                继续冲刺
              </StyledButton>
            </LazyMotion>
          </div>
        </NormalContainer>
      </body>
    </html>
  )
}
