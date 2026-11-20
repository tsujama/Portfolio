import { Component } from '@angular/core';
import { Footer } from '../../layout/footer/footer';
import { RouterLink } from '@angular/router';

@Component({
  imports: [Footer, RouterLink],
  selector: 'app-legal-notice',
  styleUrl: './legal-notice.scss',
  templateUrl: './legal-notice.html',
})
export class LegalNotice {}
