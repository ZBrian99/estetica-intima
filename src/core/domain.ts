export type Money = number;

export type PaymentStatus = 'pending' | 'approved' | 'rejected';
export type OrderStatus = 'pending' | 'paid' | 'cancelled';
export type GiftCardStatus = 'pending' | 'active' | 'redeemed' | 'cancelled';
export type PaymentMethod = 'mercadopago' | 'manual_transfer' | 'cash';
export type PromotionType = 'percent' | 'fixed' | 'buyXGetY';

export type Service = {
  id: string;
  name: string;
  description?: string;
  slug: string;
  type: 'INDIVIDUAL' | 'COMBO' | 'PACK';
  gender: 'MALE' | 'FEMALE' | 'UNISEX';
  basePrice: Money;
  finalPrice: Money;
  hasPromo: boolean;
  duration?: number;
  sessions?: number;
  categories: string[];
  bodyParts: string[];
  tags: string[];
  includedServices: string[];
  imageUrl?: string;
  images: string[];
  isActive: boolean;
  order?: number;
  isFeatured: boolean;
  isPopular: boolean;
  isNew: boolean;
  rating: number;
  reviewCount: number;
  bookings: number;
  createdAt: Date;
  updatedAt: Date;
};

export type PromotionTarget = {
  serviceIds?: string[];
  tags?: string[];
};

export type Promotion = {
  id: string;
  name: string;
  description?: string;
  type: PromotionType;
  value: number;
  startsAt: Date;
  endsAt: Date;
  combinable: boolean;
  priority: number;
  couponCode?: string;
  usageLimit?: number;
  enabled: boolean;
  targets?: PromotionTarget;
};

export type CartItem = { serviceId: string; qty: number };
export type Cart = { items: CartItem[]; couponCode?: string };

export type AppliedPromotion = {
  promotionId: string;
  amount: Money;
  label?: string;
};

export type PricingItem = {
  serviceId: string;
  qty: number;
  unitPrice: Money;
  appliedPromotions: AppliedPromotion[];
};

export type PricingResult = {
  items: PricingItem[];
  subTotal: Money;
  discountTotal: Money;
  total: Money;
  appliedPromotions: AppliedPromotion[];
};

export type OrderItem = {
  id: string;
  orderId: string;
  serviceId: string;
  qty: number;
  unitPrice: Money;
  appliedPromotions: AppliedPromotion[];
};

export type Order = {
  id: string;
  userId: string;
  status: OrderStatus;
  paymentMethod: PaymentMethod;
  subTotal: Money;
  discountTotal: Money;
  total: Money;
  createdAt: Date;
  updatedAt: Date;
};

export type Payment = {
  id: string;
  orderId: string;
  method: PaymentMethod;
  status: PaymentStatus;
  providerData?: unknown;
  events?: unknown;
  createdAt: Date;
  updatedAt: Date;
};

export type GiftCardServiceItem = { serviceId: string; qty: number };

export type GiftCard = {
  id: string;
  codeHash: string;
  creatorId: string;
  recipientName: string;
  recipientEmail: string;
  recipientPhone?: string;
  serviceItems: GiftCardServiceItem[];
  status: GiftCardStatus;
  expiresAt?: Date;
  orderId?: string;
  createdAt: Date;
  updatedAt: Date;
};

export type PromotionCondition = {
  type: 'minTotal' | 'serviceTagged' | 'couponApplied' | 'dateWindow';
  value?: number | string | string[] | { start: Date; end: Date };
};

export type PromotionAction =
  | { type: 'percent'; percent: number }
  | { type: 'fixed'; amount: Money }
  | { type: 'buyXGetY'; buyQty: number; getQty: number; serviceId?: string };

export type PromotionRule = {
  id: string;
  priority: number;
  combinable: boolean;
  conditions?: PromotionCondition[];
  action: PromotionAction;
};

export type PromotionEngine = {
  apply: (cart: Cart, context?: { services?: Service[]; promotions?: PromotionRule[] }) => PricingResult;
};

import { z } from 'zod';

export const CheckoutInputSchema = z.object({
  items: z.array(z.object({ serviceId: z.string().min(1), qty: z.number().int().min(1) })),
  paymentMethod: z.enum(['mercadopago', 'manual_transfer', 'cash']),
  couponCode: z.string().optional(),
});

export const MercadoPagoWebhookSchema = z.object({
  payment_id: z.union([z.string(), z.number()]),
  status: z.enum(['approved', 'rejected', 'pending']).optional(),
  type: z.string().optional(),
});

export const PromotionCreateSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
  type: z.enum(['percent', 'fixed', 'buyXGetY']),
  value: z.number().nonnegative(),
  startsAt: z.coerce.date(),
  endsAt: z.coerce.date(),
  combinable: z.boolean().default(true),
  priority: z.number().int().default(0),
  couponCode: z.string().optional(),
  usageLimit: z.number().int().positive().optional(),
  enabled: z.boolean().default(true),
  targets: z
    .object({ serviceIds: z.array(z.string()).optional(), tags: z.array(z.string()).optional() })
    .optional(),
});

export const GiftCardCreateSchema = z.object({
  recipientName: z.string().min(1),
  recipientEmail: z.string().email(),
  recipientPhone: z.string().optional(),
  serviceItems: z.array(z.object({ serviceId: z.string().min(1), qty: z.number().int().min(1) })),
});

export const GiftCardRedeemSchema = z.object({ code: z.string().min(6) });
