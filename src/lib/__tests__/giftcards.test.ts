import { describe, it, expect } from 'vitest'
import { generateGiftCardCode, hashGiftCardCode, verifyGiftCardCode } from '../giftcards'

describe('giftcards util', () => {
  it('generates human-friendly code', () => {
    const code = generateGiftCardCode()
    expect(code).toMatch(/^INTIMA(-[A-Z0-9]{4}){4}$/)
  })
  it('hash and verify with pepper', async () => {
    const code = generateGiftCardCode()
    const pepper = 'test-pepper'
    const hash = await hashGiftCardCode(code, pepper)
    const ok = await verifyGiftCardCode(code, pepper, hash)
    expect(ok).toBe(true)
  })
})

