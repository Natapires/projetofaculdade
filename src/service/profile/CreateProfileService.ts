import { ProfileRepositories } from        "../../repositories/ProfileRepositories";
import { getCustomRepository } from "typeorm";
interface IProfileRequest {
    description: string;
    photo: string;
    }

class CreateProfileService {
    async execute({ description, photo}: IProfileRequest) {
        const profileRepositories = getCustomRepository( ProfileRepositories );

        const profile = profileRepositories.create(
                {
                    description,
                    photo
            });
            await profileRepositories.save(profile);
            console.log("Profile Criado")
            return profile;
        }
    }

    export { CreateProfileService };