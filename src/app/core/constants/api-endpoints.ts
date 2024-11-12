import { environment } from '../../../environments/env.local';

class ApiEndpoints {
  private PATH: string = `${environment.baseURL}`;

  public SIGN_IN: string = `${this.PATH}/`;
  public FORGOT_PASSWORD: string = `${this.PATH}/forgotPassword/requestEmail`;

}

export let apiEndpoints = new ApiEndpoints();
