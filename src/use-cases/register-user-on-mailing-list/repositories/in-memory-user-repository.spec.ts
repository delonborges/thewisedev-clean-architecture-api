import { type UserData } from '../user-data'
import { InMemoryUserRepository } from './in-memory-user-repository'

describe('In memory user repository', () => {
  test('should return null if user is not found', async () => {
    const users: UserData[] = []
    const userRepository = new InMemoryUserRepository(users)
    const user = await userRepository.findUserByEmail('any@email.com')
    expect(user).toBeNull()
  })
  test('should return user if it is found in the repository', async () => {
    const users: UserData[] = []
    const name = 'any_name'
    const email = 'any@email.com'
    const userRepository = new InMemoryUserRepository(users)
    await userRepository.add({
      name,
      email
    })
    const user = await userRepository.findUserByEmail('any@email.com')
    expect(user.name).toBe('any_name')
  })
  test('should return all users in the repository', async () => {
    const users: UserData[] = [{
      name: 'any_name',
      email: 'any@email.com'
    }, {
      name: 'second_name',
      email: 'second@email.com'
    }]
    const userRepository = new InMemoryUserRepository(users)
    const returnedUsers = userRepository.findAllUsers()
    expect((await returnedUsers).length).toBe(2)
  })
})
