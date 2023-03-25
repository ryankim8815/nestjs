import { Repository } from 'typeorm';

import { ResumeExperience } from '../entity/resumeExperience.entity';

class ResumeExperienceRepository extends Repository<ResumeExperience> {
  // 커스텀 리포지토리 클래스
  // repository 기본 지원하는 CRUD 이외의 비즈니스 로직 작성 가능
  // DB 관련 로직은 이쪽에 작성
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
