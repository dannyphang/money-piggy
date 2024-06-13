import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class TransactionService {
    constructor() {

    }
}

export class CategoryDTO {
    id: string;
    name: string;
    type: string;
    budget: number;
    spent: number;
    createdDatetime: Date;
    modifiedDatetime: Date;
    status: number;
}