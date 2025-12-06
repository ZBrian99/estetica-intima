import bcrypt from 'bcryptjs'

const ALPHABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'

export function generateGiftCardCode(): string {
  const groups = 4
  const groupSize = 4
  let code = 'INTIMA'
  for (let g = 0; g < groups; g++) {
    code += '-'
    let part = ''
    for (let i = 0; i < groupSize; i++) {
      const idx = Math.floor(Math.random() * ALPHABET.length)
      part += ALPHABET[idx]
    }
    code += part
  }
  return code
}

export async function hashGiftCardCode(code: string, pepper: string): Promise<string> {
  return bcrypt.hash(code + pepper, 12)
}

export async function verifyGiftCardCode(code: string, pepper: string, hash: string): Promise<boolean> {
  return bcrypt.compare(code + pepper, hash)
}

