import { Repository } from 'typeorm';
import { Code } from '../entity/code.entity';

class CodeRepository extends Repository<Code> {
  async findOneByEmail(email: string): Promise<Code> {
    const code: Code = await this.findOneBy({ email: email });

    return code;
  }
}

export default CodeRepository;
