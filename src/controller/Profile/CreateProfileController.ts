import { Request, Response } from "express";
import { CreateProfileService } from "../../service/Profile/CreateProfileService";

class CreateProfileController {
    async handle (request: Request, response: Response) {
        const { description, photo } = request.body;

        const profile = {
                description:description,
            photo:photo
        };
        const CreateProfileService = new CreateProfileService();
        const ret = await CreateProfileService.execute(profile);
        return response.json(ret);


    }
}
export { CreateProfileController };