import {
  Directive,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { BaseTableComponent } from '@d-components';
import { FilterListingService } from '@d-services/wms/filter-listing.service';
import { filter } from 'rxjs';

@Directive({
  selector: '[listingFilter]',
  standalone: true,
})
export class ListingFilterDirective implements OnInit, OnChanges {
  @Input() listingFilter: string;
  @Output() onSearch = new EventEmitter();
  @Input() filterData: {
    searchGlobal: {
      filterBy: string;
      searchBy: string;
    };
    advancedFilter: any;
  };
  @Input() tableEvents: any;
  @Input('activeItem') activeTab: any;

  constructor(
    private filterListingService: FilterListingService,
    private router: Router,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.filterData && this.filterData) {
      this.filterListingService.filterData = this.filterData;
    }
    if (changes.listingFilter && this.listingFilter) {
      this.filterListingService.locationName = this.listingFilter;
    }
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event: NavigationStart) => {
        if (this.filterListingService.locationName)
          if (event.url.includes(this.filterListingService.locationName)) {
            this.filterListingService.tableEvents = this.tableEvents;
            if (this.activeTab)
              this.filterListingService.activeTab = this.activeTab;
          } else {
            this.filterListingService.locationName = '';
            this.filterListingService.tableEvents = null;
            this.filterListingService.activeTab = null;
            this.filterListingService.filterData = null;
          }
      });
  }
}
