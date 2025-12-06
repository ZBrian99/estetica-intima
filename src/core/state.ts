import type { PaymentStatus, OrderStatus, GiftCardStatus } from './domain';

export function nextPaymentStatus(current: PaymentStatus, provider: 'approved' | 'rejected' | 'pending'): PaymentStatus {
  if (current !== 'pending') return current;
  if (provider === 'approved') return 'approved';
  if (provider === 'rejected') return 'rejected';
  return 'pending';
}

export function nextOrderStatus(current: OrderStatus, event: 'paymentApproved' | 'cancel'): OrderStatus {
  if (current === 'pending' && event === 'paymentApproved') return 'paid';
  if (event === 'cancel') return 'cancelled';
  return current;
}

export function nextGiftCardStatus(current: GiftCardStatus, event: 'activate' | 'redeem' | 'cancel'): GiftCardStatus {
  if (current === 'pending' && event === 'activate') return 'active';
  if (current === 'active' && event === 'redeem') return 'redeemed';
  if (event === 'cancel') return 'cancelled';
  return current;
}

