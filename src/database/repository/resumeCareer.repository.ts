import { Repository } from 'typeorm';

import { ResumeCareer } from '../entity/resumeCareer.entity';

class ResumeCareerRepository extends Repository<ResumeCareer> {
  async getResumeCareerByResumeCareerId(
    resumeCareerId: string,
  ): Promise<ResumeCareer> {
    const resumeEducation = await this.findOneBy({
      resumeCareerId: resumeCareerId,
    });

    return resumeEducation;
  }
}

export default ResumeCareerRepository;
