import {UserRepository} from '../ports/user-repository';
import {UserData} from '../user-data';

export class InMemoryUserRepository implements UserRepository {

    private repository: UserData[]

    constructor(repository: UserData[]) {
        this.repository = repository
    }

    add(user: UserData): Promise<void> {
        return Promise.resolve(undefined);
    }

    exists(user: UserData): Promise<boolean> {
        return Promise.resolve(false);
    }

    findAllUsers(): Promise<UserData[]> {
        return Promise.resolve([]);
    }

    findUserByEmail(email: string): Promise<UserData> {
        return null;
    }

}