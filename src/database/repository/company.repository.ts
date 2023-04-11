import { Repository } from 'typeorm';

import { Company } from '../entity/Company.entity';

class CompanyRepository extends Repository<Company> {
  async getCompanyByCompanyId(companyId: string): Promise<Company> {
    const company: Company = await this.findOneBy({ companyId: companyId });

    return company;
  }
}

export default CompanyRepository;
