import axios from 'axios';

import PostModel from '../models/PostModel';

export default class BlogService {
  private API_URL = 'https://simple-blog-api.crew.red';

  async getPosts(): Promise<PostModel[]> {
    const { data } = await axios.get(`${this.API_URL}/posts`);
    return data;
  }

  async getPostById(id: string): Promise<PostModel> {
    const { data } = await axios.get(`${this.API_URL}/posts/${id}`);
    return data;
  }

  sendPost(post: PostModel): void {
    axios.post(`${this.API_URL}/posts`, post);
  }
}
