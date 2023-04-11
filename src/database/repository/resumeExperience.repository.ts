import { Repository } from 'typeorm';

import { ResumeExperience } from '../entity/resumeExperience.entity';

class ResumeExperienceRepository extends Repository<ResumeExperience> {
  async getResumeExperienceByResumeExperienceId(
    resumeExperienceId: string,
  ): Promise<ResumeExperience> {
    const resumeExperience = await this.findOneBy({
      resumeExperienceId: resumeExperienceId,
    });

    return resumeExperience;
  }
}

export default ResumeExperienceRepository;
