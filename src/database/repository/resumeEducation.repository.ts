import { Repository } from 'typeorm';

import { ResumeEducation } from '../entity/resumeEducation.entity';

class ResumeEducationRepository extends Repository<ResumeEducation> {
  async getResumeEducationByResumeEducationId(
    resumeEducationId: string,
  ): Promise<ResumeEducation> {
    const resumeEducation = await this.findOneBy({
      resumeEducationId: resumeEducationId,
    });

    return resumeEducation;
  }
}

export default ResumeEducationRepository;
