import { Authorizer } from '../../auth/authorizer';
import express from 'express';
import { UserService } from '../../services/user.service';
import { Loader } from '../../startup/loader';
import { ResponseHandler } from 'common/response.handler';

export class UserController {
    //#region member variables and constructors

    _service: UserService = null;

    _authorizer: Authorizer = null;

    constructor() {
        this._service = Loader.container.resolve(UserService);
        this._authorizer = Loader.authorizer;
    }

    //#endregion

    delete = async (request: express.Request, response: express.Response): Promise<void> => {
        throw new Error('Method not implemented.');
    };

    getById = async (request: express.Request, response: express.Response): Promise<void> => {
        throw new Error('Method not implemented.');
    };

    search = async (request: express.Request, response: express.Response): Promise<void> => {
        throw new Error('Method not implemented.');
    };

    create = async (request: express.Request, response: express.Response) => {
    //     const apiResponse = {
    //         status : 200,
    try {
            const apiResponse = {
                name : 'akash jadhav',
                designation : 'soft dev',
            };

        throw new Error('Calling this endpoint will throw error')
        // return response.status(apiResponse.status).send(apiResponse);
        ResponseHandler.success(
            request,
            response,
            'User created',
            200,
            {
                entity : apiResponse,
            },
            false
        );
    }catch(err){
        ResponseHandler.handleError(request,response,err);
    }
  };
}
