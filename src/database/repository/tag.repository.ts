import { Repository } from 'typeorm';

import { Tag } from '../entity/tag.entity';

class TagRepository extends Repository<Tag> {
  async getResumeByResumeId(tagId: string): Promise<Tag> {
    const tag = await this.findOneBy({
      tagId: tagId,
    });

    return tag;
  }
}

export default TagRepository;
