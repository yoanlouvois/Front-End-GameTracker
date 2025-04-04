/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createTag } from '../fn/tag-controller/create-tag';
import { CreateTag$Params } from '../fn/tag-controller/create-tag';
import { deleteTag } from '../fn/tag-controller/delete-tag';
import { DeleteTag$Params } from '../fn/tag-controller/delete-tag';
import { getAllTags } from '../fn/tag-controller/get-all-tags';
import { GetAllTags$Params } from '../fn/tag-controller/get-all-tags';
import { getTagById } from '../fn/tag-controller/get-tag-by-id';
import { GetTagById$Params } from '../fn/tag-controller/get-tag-by-id';
import { getTagByName } from '../fn/tag-controller/get-tag-by-name';
import { GetTagByName$Params } from '../fn/tag-controller/get-tag-by-name';
import { getTagsForGame1 } from '../fn/tag-controller/get-tags-for-game-1';
import { GetTagsForGame1$Params } from '../fn/tag-controller/get-tags-for-game-1';
import { PageTagDto } from '../models/page-tag-dto';
import { searchTags } from '../fn/tag-controller/search-tags';
import { SearchTags$Params } from '../fn/tag-controller/search-tags';
import { TagDto } from '../models/tag-dto';
import { updateTag } from '../fn/tag-controller/update-tag';
import { UpdateTag$Params } from '../fn/tag-controller/update-tag';

@Injectable({ providedIn: 'root' })
export class TagControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateTag()` */
  static readonly UpdateTagPath = '/gametracker/v1/tags/update/{tagId}';

  /**
   * Mettre à jour un tag.
   *
   * Mettre à jour un tag
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateTag()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTag$Response(params: UpdateTag$Params, context?: HttpContext): Observable<StrictHttpResponse<TagDto>> {
    return updateTag(this.http, this.rootUrl, params, context);
  }

  /**
   * Mettre à jour un tag.
   *
   * Mettre à jour un tag
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateTag$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTag(params: UpdateTag$Params, context?: HttpContext): Observable<TagDto> {
    return this.updateTag$Response(params, context).pipe(
      map((r: StrictHttpResponse<TagDto>): TagDto => r.body)
    );
  }

  /** Path part for operation `createTag()` */
  static readonly CreateTagPath = '/gametracker/v1/tags/create';

  /**
   * Créer un tag.
   *
   * Créer un tag
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createTag()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createTag$Response(params: CreateTag$Params, context?: HttpContext): Observable<StrictHttpResponse<TagDto>> {
    return createTag(this.http, this.rootUrl, params, context);
  }

  /**
   * Créer un tag.
   *
   * Créer un tag
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createTag$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createTag(params: CreateTag$Params, context?: HttpContext): Observable<TagDto> {
    return this.createTag$Response(params, context).pipe(
      map((r: StrictHttpResponse<TagDto>): TagDto => r.body)
    );
  }

  /** Path part for operation `getTagById()` */
  static readonly GetTagByIdPath = '/gametracker/v1/tags/{tagId}';

  /**
   * Récupérer un tag par son ID.
   *
   * Récupérer un tag par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTagById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTagById$Response(params: GetTagById$Params, context?: HttpContext): Observable<StrictHttpResponse<TagDto>> {
    return getTagById(this.http, this.rootUrl, params, context);
  }

  /**
   * Récupérer un tag par son ID.
   *
   * Récupérer un tag par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTagById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTagById(params: GetTagById$Params, context?: HttpContext): Observable<TagDto> {
    return this.getTagById$Response(params, context).pipe(
      map((r: StrictHttpResponse<TagDto>): TagDto => r.body)
    );
  }

  /** Path part for operation `searchTags()` */
  static readonly SearchTagsPath = '/gametracker/v1/tags/search/{query}';

  /**
   * Rechercher des tags.
   *
   * Rechercher des tags
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchTags()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchTags$Response(params: SearchTags$Params, context?: HttpContext): Observable<StrictHttpResponse<PageTagDto>> {
    return searchTags(this.http, this.rootUrl, params, context);
  }

  /**
   * Rechercher des tags.
   *
   * Rechercher des tags
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `searchTags$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchTags(params: SearchTags$Params, context?: HttpContext): Observable<PageTagDto> {
    return this.searchTags$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageTagDto>): PageTagDto => r.body)
    );
  }

  /** Path part for operation `getTagByName()` */
  static readonly GetTagByNamePath = '/gametracker/v1/tags/name/{name}';

  /**
   * Récupérer un tag par son nom.
   *
   * Récupérer un tag par son nom
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTagByName()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTagByName$Response(params: GetTagByName$Params, context?: HttpContext): Observable<StrictHttpResponse<TagDto>> {
    return getTagByName(this.http, this.rootUrl, params, context);
  }

  /**
   * Récupérer un tag par son nom.
   *
   * Récupérer un tag par son nom
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTagByName$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTagByName(params: GetTagByName$Params, context?: HttpContext): Observable<TagDto> {
    return this.getTagByName$Response(params, context).pipe(
      map((r: StrictHttpResponse<TagDto>): TagDto => r.body)
    );
  }

  /** Path part for operation `getTagsForGame1()` */
  static readonly GetTagsForGame1Path = '/gametracker/v1/tags/game/{gameId}';

  /**
   * Récupérer les tags d'un jeu.
   *
   * Récupérer les tags d'un jeu
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTagsForGame1()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTagsForGame1$Response(params: GetTagsForGame1$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TagDto>>> {
    return getTagsForGame1(this.http, this.rootUrl, params, context);
  }

  /**
   * Récupérer les tags d'un jeu.
   *
   * Récupérer les tags d'un jeu
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTagsForGame1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTagsForGame1(params: GetTagsForGame1$Params, context?: HttpContext): Observable<Array<TagDto>> {
    return this.getTagsForGame1$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<TagDto>>): Array<TagDto> => r.body)
    );
  }

  /** Path part for operation `getAllTags()` */
  static readonly GetAllTagsPath = '/gametracker/v1/tags/all';

  /**
   * Récupérer tous les tags.
   *
   * Récupérer tous les tags
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllTags()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTags$Response(params: GetAllTags$Params, context?: HttpContext): Observable<StrictHttpResponse<PageTagDto>> {
    return getAllTags(this.http, this.rootUrl, params, context);
  }

  /**
   * Récupérer tous les tags.
   *
   * Récupérer tous les tags
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllTags$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTags(params: GetAllTags$Params, context?: HttpContext): Observable<PageTagDto> {
    return this.getAllTags$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageTagDto>): PageTagDto => r.body)
    );
  }

  /** Path part for operation `deleteTag()` */
  static readonly DeleteTagPath = '/gametracker/v1/tags/delete/{tagId}';

  /**
   * Supprimer un tag.
   *
   * Supprimer un tag
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteTag()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTag$Response(params: DeleteTag$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteTag(this.http, this.rootUrl, params, context);
  }

  /**
   * Supprimer un tag.
   *
   * Supprimer un tag
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteTag$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTag(params: DeleteTag$Params, context?: HttpContext): Observable<void> {
    return this.deleteTag$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
