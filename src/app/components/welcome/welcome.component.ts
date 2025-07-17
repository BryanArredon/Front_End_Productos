import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  currentTime: Date = new Date();

  quickActions = [
    { title: 'Productos', icon: 'shopping_cart', route: '/products', description: 'Explora nuestros productos' },
    { title: 'Ofertas', icon: 'local_offer', route: '/offers', description: 'Descubre ofertas especiales' },
    { title: 'Categorías', icon: 'category', route: '/categories', description: 'Navega por categorías' }
  ];

  features: Array<{title: string, description: string, icon: string, color: ThemePalette}> = [
    { title: 'Productos Frescos', description: 'Siempre los mejores productos', icon: 'eco', color: 'primary' },
    { title: 'Entrega Rápida', description: 'Servicio a domicilio disponible', icon: 'delivery_dining', color: 'accent' },
    { title: 'Precios Justos', description: 'Los mejores precios del mercado', icon: 'attach_money', color: 'primary' },
    { title: 'Atención', description: 'Estamos aquí para ayudarte', icon: 'support_agent', color: 'accent' }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Actualizar la hora cada minuto
    setInterval(() => {
      this.currentTime = new Date();
    }, 60000);
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  getGreeting(): string {
    const hour = this.currentTime.getHours();
    if (hour < 12) return 'Buenos días';
    if (hour < 18) return 'Buenas tardes';
    return 'Buenas noches';
  }
}