import { describe, it, expect } from 'vitest'
import { nextPaymentStatus, nextOrderStatus, nextGiftCardStatus } from '../../core/state'

describe('state transitions', () => {
  it('payment: pending -> approved', () => {
    expect(nextPaymentStatus('pending', 'approved')).toBe('approved')
  })
  it('order: pending -> paid on paymentApproved', () => {
    expect(nextOrderStatus('pending', 'paymentApproved')).toBe('paid')
  })
  it('giftcard: pending -> active -> redeemed', () => {
    const active = nextGiftCardStatus('pending', 'activate')
    expect(active).toBe('active')
    expect(nextGiftCardStatus(active, 'redeem')).toBe('redeemed')
  })
})

