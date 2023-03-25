import { Repository } from 'typeorm';

import { Resume } from '../entity/resume.entity';

class ResumeRepository extends Repository<Resume> {
  // 커스텀 리포지토리 클래스
  // repository 기본 지원하는 CRUD 이외의 비즈니스 로직 작성 가능
  // DB 관련 로직은 이쪽에 작성
  async getResumeByResumeId(resumeId: string): Promise<Resume> {
    const resume = await this.findOneBy({
      resumeId: resumeId,
    });

    return resume;
  }
}

export default ResumeRepository;
