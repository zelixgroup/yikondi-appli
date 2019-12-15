import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { map } from 'rxjs/operators';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IPatientFavoritePharmacy } from 'app/shared/model/patient-favorite-pharmacy.model';

type EntityResponseType = HttpResponse<IPatientFavoritePharmacy>;
type EntityArrayResponseType = HttpResponse<IPatientFavoritePharmacy[]>;

@Injectable({ providedIn: 'root' })
export class PatientFavoritePharmacyService {
  public resourceUrl = SERVER_API_URL + 'api/patient-favorite-pharmacies';

  constructor(protected http: HttpClient) {}

  create(patientFavoritePharmacy: IPatientFavoritePharmacy): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(patientFavoritePharmacy);
    return this.http
      .post<IPatientFavoritePharmacy>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(patientFavoritePharmacy: IPatientFavoritePharmacy): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(patientFavoritePharmacy);
    return this.http
      .put<IPatientFavoritePharmacy>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IPatientFavoritePharmacy>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IPatientFavoritePharmacy[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(patientFavoritePharmacy: IPatientFavoritePharmacy): IPatientFavoritePharmacy {
    const copy: IPatientFavoritePharmacy = Object.assign({}, patientFavoritePharmacy, {
      activationDate:
        patientFavoritePharmacy.activationDate != null && patientFavoritePharmacy.activationDate.isValid()
          ? patientFavoritePharmacy.activationDate.toJSON()
          : null
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.activationDate = res.body.activationDate != null ? moment(res.body.activationDate) : null;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((patientFavoritePharmacy: IPatientFavoritePharmacy) => {
        patientFavoritePharmacy.activationDate =
          patientFavoritePharmacy.activationDate != null ? moment(patientFavoritePharmacy.activationDate) : null;
      });
    }
    return res;
  }
}
