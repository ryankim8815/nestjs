import { Repository } from 'typeorm';

import { ResumeLanguage } from '../entity/resumeLanguage.entity';

class ResumeLanguageRepository extends Repository<ResumeLanguage> {
  // 커스텀 리포지토리 클래스
  // repository 기본 지원하는 CRUD 이외의 비즈니스 로직 작성 가능
  // DB 관련 로직은 이쪽에 작성
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
