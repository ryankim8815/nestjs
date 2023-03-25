import { Repository } from 'typeorm';

import { ResumeCareer } from '../entity/resumeCareer.entity';

class ResumeCareerRepository extends Repository<ResumeCareer> {
  // 커스텀 리포지토리 클래스
  // repository 기본 지원하는 CRUD 이외의 비즈니스 로직 작성 가능
  // DB 관련 로직은 이쪽에 작성
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
