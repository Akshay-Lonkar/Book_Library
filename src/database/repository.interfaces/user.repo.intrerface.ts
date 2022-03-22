import { UserDomainModel } from 'domain.types/user/user.domain.model';
import { UserDetailsDto } from 'domain.types/user/user.dto';

export interface IUserRepo {
    getById(userId: string): UserDetailsDto | PromiseLike<UserDetailsDto>;
    findOneUser(arg0: { email: any; isActive: boolean; }): UserDetailsDto | PromiseLike<UserDetailsDto>;
    getUserHashedPassword(id: string): string | PromiseLike<string>;
    findUsersByRoleId(id: string): Promise<UserDetailsDto[]>;
    createUser(userDetails: UserDomainModel): Promise<UserDetailsDto>;
}
