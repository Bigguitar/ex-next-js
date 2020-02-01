import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common'
import { ArticlesService } from './articles.service'
import { ArticlesQuery } from './articles.query'
import { Articles } from './articles.entity'
import { CreateArticleRequest } from './create-article.request'
import { UpdateArticleRequest } from './update-article.request'

@Controller('articles')
export class ArticlesController {
  constructor (private articlesService: ArticlesService) {}

  @Get('/')
  public findAll (@Query() query: ArticlesQuery): Promise<Articles[]> {
    return this.articlesService.findAll(query)
  }

  @Get(':id')
  public findOne (@Param('id') id: string): Promise<Articles> {
    return this.articlesService.findOne(id)
  }

  @Post('/')
  public create (@Body() request: CreateArticleRequest): Promise<Articles> {
    return this.articlesService.create(request)
  }

  @Patch(':id')
  public update (
    @Param('id') id: string,
    @Body() request: UpdateArticleRequest
  ): Promise<Articles> {
    return this.articlesService.update(id, request)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete (@Param('id') id: string) {
    await this.articlesService.delete(id)
  }
}
