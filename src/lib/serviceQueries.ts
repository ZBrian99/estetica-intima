import { prisma } from '@/lib/prisma'
import type { ServiceType, Gender } from '@prisma/client'

interface ServiceFilters {
  type?: ServiceType
  categories?: string[]
  bodyParts?: string[]
  gender?: Gender
  minPrice?: number
  maxPrice?: number
  search?: string
  featured?: boolean
  new?: boolean
  popular?: boolean
}

export async function getServices({
  type,
  categories,
  bodyParts,
  gender,
  minPrice,
  maxPrice,
  search,
  featured,
  new: isNew,
  popular,
  page = 1,
  limit = 12,
}: ServiceFilters & { page?: number; limit?: number }) {
  const where = {
    isActive: true,
    ...(type && { type }),
    ...(gender && gender !== 'UNISEX' && { gender: { in: [gender, 'UNISEX'] } }),
    ...(categories?.length && { categories: { hasSome: categories } }),
    ...(bodyParts?.length && { bodyParts: { hasSome: bodyParts } }),
    ...(minPrice && { price: { gte: minPrice } }),
    ...(maxPrice && { price: { lte: maxPrice } }),
    ...(featured && { isFeatured: true }),
    ...(isNew && { isNew: true }),
    ...(popular && { isPopular: true }),
    ...(search && {
      OR: [
        { name: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
        { categories: { has: search } },
        { bodyParts: { has: search } },
        { tags: { has: search } },
      ],
    }),
  }
  
  const [services, total] = await Promise.all([
    prisma.service.findMany({
      where,
      orderBy: [
        { isFeatured: 'desc' },
        { isNew: 'desc' },
        { isPopular: 'desc' },
        { createdAt: 'desc' },
      ],
      skip: (page - 1) * limit,
      take: limit,
    }),
    prisma.service.count({ where }),
  ])
  
  return {
    services,
    pagination: {
      page,
      limit,
      total,
      pages: Math.ceil(total / limit),
    },
  }
}