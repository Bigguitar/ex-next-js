import { Controller, Get, Query } from '@nestjs/common'
import { ArticlesService } from './articles.service'
import { ArticlesQuery } from './articles.query'

@Controller('articles')
export class ArticlesController {
  constructor (private articlesService: ArticlesService) {}

  @Get('/')
  public findAll (@Query() query: ArticlesQuery) {
    return this.articlesService.findAll(query)
  }
}
