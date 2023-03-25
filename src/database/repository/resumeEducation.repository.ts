import { Repository } from 'typeorm';

import { ResumeEducation } from '../entity/resumeEducation.entity';

class ResumeEducationRepository extends Repository<ResumeEducation> {
  // 커스텀 리포지토리 클래스
  // repository 기본 지원하는 CRUD 이외의 비즈니스 로직 작성 가능
  // DB 관련 로직은 이쪽에 작성
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
