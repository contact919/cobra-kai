export class LogManager {
  static USERS = [
    { userId: 'l1', name: '🚗l1' },
    { userId: 'l2', name: '🚗l2' },
    { userId: 'l3', name: '🚗l3' }
  ]

  constructor() {}

  output(): string {
    return `${Date.now()}`
  }
}
