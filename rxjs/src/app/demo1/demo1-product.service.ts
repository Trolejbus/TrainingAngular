import { Injectable } from "@angular/core";
import { BehaviorSubject, combineLatest, merge, Observable, of, Subject } from "rxjs";
import { delay, map, scan, tap } from "rxjs/operators";
import { Demo1Category, Demo1CategoryService } from "./demo1-category.service";

@Injectable()
export class Demo1ProductService {
    
    public products$ = of(MOCKED_PRODUCTS).pipe(delay(1000));
    public mode$ = new BehaviorSubject<Demo1Mode>(Demo1Mode.Display);
    private addProductSubject = new Subject<Demo1Product>();
    private addProduct$: Observable<Demo1Product> = this.addProductSubject.asObservable();

    public productsWithAdd$ = merge(
        this.products$,
        this.addProduct$ as Observable<any>, // TODO: Determine why Observable<any> is required.
    )
    .pipe(
        scan((acc: Demo1Product[], curr: Demo1Product) => [...acc, curr])
    );
    public productsWithCategories$ = combineLatest([this.productsWithAdd$, this.categoryService.categories$])
        .pipe(
            map(([products, categories]) => 
                products.map(p => ({
                    ...p,
                    category: categories.find(c => c.id == p.categoryId),
                }))
            )
        );

    private selectItemSubject = new Subject<string>();
    private selectItem$ = this.selectItemSubject.asObservable();
    public selectedProduct$: Observable<Demo1Product | null> = combineLatest([
        this.productsWithCategories$,
        this.selectItem$,
    ]).pipe(
        map(([products, selectedProductId]) => 
            products.find(p => p.id === selectedProductId) ?? null
        ),
        tap(product => console.log("selectedProduct", product)),
    );
    
    constructor(private categoryService: Demo1CategoryService) {
        
    }

    public selectProduct(productId: string): void {
        this.selectItemSubject.next(productId);
    }

    public addProduct(product: Demo1Product): void {
        product.id = product.id ?? GuidTools.newGuid();
        this.addProductSubject.next(product);
    }
}

export class Demo1Product {
    public id!: string;
    public name!: string;
    public categoryId!: number;
    public price!: number;
    public category?: Demo1Category;
}

export const MOCKED_PRODUCTS: Demo1Product[] = [
    {
        id: "b2c2aebc-8720-4a61-8c45-e7168c300d4f",
        name: "Hammer",
        price: 4.5,
        categoryId: 1
    },
    {
        id: "33d28e57-3e2e-4db5-a0b2-d5501962dac5",
        name: "Table",
        categoryId: 2,
        price: 50,
    },
    {
        id: "92f774e3-8790-4d6f-a76e-8e3b435420b4",
        name: "Pen",
        categoryId: 2,
        price: 0.5,
    },
    {
        id: "1927f227-9e76-4022-ab8d-19d6a8b81dd7",
        name: "Drill",
        categoryId: 1,
        price: 2,
    },
    {
        id: "322a9f07-bd8b-4b8e-b436-aad3bcc76273",
        name: "Saw",
        categoryId: 1,
        price: 10.99,
    },
];

export enum Demo1Mode {
    Display = 1,
    Add = 2,
}

export class GuidTools {
    public static newGuid(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}