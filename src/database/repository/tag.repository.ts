import { Repository } from 'typeorm';

import { Tag } from '../entity/tag.entity';

class TagRepository extends Repository<Tag> {
  // 커스텀 리포지토리 클래스
  // repository 기본 지원하는 CRUD 이외의 비즈니스 로직 작성 가능
  // DB 관련 로직은 이쪽에 작성
  async getResumeByResumeId(tagId: string): Promise<Tag> {
    const tag = await this.findOneBy({
      tagId: tagId,
    });

    return tag;
  }
}

export default TagRepository;
