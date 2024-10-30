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
              <StyledButton onClick={() => location.href = 'https://bemly.top'}>
                开拓！
              </StyledButton>
            </LazyMotion>
          </div>
          <div className="text-center mt-4">
            <a href="https://icp.gov.moe/?keyword=bemly.moe">萌ICP备20242029号</a>
          </div>
        </NormalContainer>
      </body>
    </html>
  )
}
