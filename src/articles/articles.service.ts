import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Article } from './article.entity'
import { DeleteResult, Repository } from 'typeorm'
import { ArticlesQuery } from './articles.query'
import { CreateArticleRequest } from './create-article.request'
import { UpdateArticleRequest } from './update-article.request'

@Injectable()
export class ArticlesService {
  constructor (
    @InjectRepository(Article) private articlesRepository: Repository<Article>
  ) {}

  public findAll (query: ArticlesQuery): Promise<Article[]> {
    return this.articlesRepository.find(query)
  }

  public findOne (id: string): Promise<Article> {
    return this.articlesRepository.findOne(id)
  }

  public create (request: CreateArticleRequest): Promise<Article> {
    const article = this.articlesRepository.create(request)

    return this.articlesRepository.save(article)
  }

  async update (id: string, request: UpdateArticleRequest): Promise<Article> {
    let article = await this.articlesRepository.findOne(id)

    article = this.articlesRepository.merge(article, request)

    return this.articlesRepository.save(article)
  }

  public delete (id: string): Promise<DeleteResult> {
    return this.articlesRepository.delete(id)
  }
}
