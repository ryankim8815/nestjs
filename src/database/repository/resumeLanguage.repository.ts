import { Repository } from 'typeorm';

import { ResumeLanguage } from '../entity/resumeLanguage.entity';

class ResumeLanguageRepository extends Repository<ResumeLanguage> {
  async getResumeLanguageByResumeLanguageId(
    resumeLanguageId: string,
  ): Promise<ResumeLanguage> {
    const resumeLanguage = await this.findOneBy({
      resumeLanguageId: resumeLanguageId,
    });

    return resumeLanguage;
  }
}

export default ResumeLanguageRepository;
