import { Repository } from 'typeorm';

import { Resume } from '../entity/resume.entity';

class ResumeRepository extends Repository<Resume> {
  async getResumeByResumeId(resumeId: string): Promise<Resume> {
    const resume = await this.findOneBy({
      resumeId: resumeId,
    });

    return resume;
  }
}

export default ResumeRepository;
