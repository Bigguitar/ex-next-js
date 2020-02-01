import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Articles } from './articles.entity'
import { Repository } from 'typeorm'
import { ArticlesQuery } from './articles.query'

@Injectable()
export class ArticlesService {
  constructor (
    @InjectRepository(Articles) private articlesRepository: Repository<Articles>
  ) {}

  public findAll (query: ArticlesQuery): Promise<Articles[]> {
    return this.articlesRepository.find(query)
  }
}
