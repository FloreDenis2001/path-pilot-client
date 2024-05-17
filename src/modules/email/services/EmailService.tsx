import ApiServer from "../../system/service/ApiServer";

class EmailService extends ApiServer {
  sendEmail = async (
    email: { to: string },
    companyRegistrationNumber: string
  ): Promise<void> => {
    const response = await this.api<Object, void>(
      `/email/send?companyRegistrationNumber=${companyRegistrationNumber}`,
      "POST",
      email,
      ""
    );
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      return Promise.reject([]);
    }
  };

  isValid = async (code: String): Promise<boolean> => {
    const response = await this.api<null, boolean>(
      `/email/validate/${code}`,
      "GET",
      null,
      ""
    );

    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      return Promise.reject([]);
    }
  };

  removeLink = async (code: string): Promise<void> => {
    const response = await this.api<null, void>(
      `/email/remove/${code}`,
      "DELETE",
      null,
      ""
    );

    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      return Promise.reject([]);
    }
  };

  resetEmail = async (email: string): Promise<string> => {
    const response = await this.api<null, string>(
      `/email/reset?email=${email}`,
      "POST",
      null,
      ""
    );
    if (response.status === 200) {
      const data = await response.text();
      return data;
    } else {
      return Promise.reject([]);
    }
  };
}
export default EmailService;