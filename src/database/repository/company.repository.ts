import { Repository } from 'typeorm';

import { Company } from '../entity/Company.entity';

class CompanyRepository extends Repository<Company> {
  // 커스텀 리포지토리 클래스
  // repository 기본 지원하는 CRUD 이외의 비즈니스 로직 작성 가능
  // DB 관련 로직은 이쪽에 작성

  async getCompanyByCompanyId(companyId: string): Promise<Company> {
    const company: Company = await this.findOneBy({ companyId: companyId });

    return company;
  }
}

export default CompanyRepository;
