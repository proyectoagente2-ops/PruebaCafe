import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import {
  Search,
  XCircle,
  Check,
  Sliders,
} from 'lucide-react';
import { useProductFilters } from '@/hooks/use-product-filters';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

interface FiltersSidebarProps {
  totalProducts: number;
  uniqueOrigins: string[];
}

const roastLevels = [
  { value: 'all', label: 'Todos los niveles' },
  { value: 'light', label: 'Light Roast' },
  { value: 'light-medium', label: 'Light-Medium Roast' },
  { value: 'medium', label: 'Medium Roast' },
  { value: 'medium-dark', label: 'Medium-Dark Roast' },
  { value: 'dark', label: 'Dark Roast' },
];

const sortOptions = [
  { value: 'newest', label: 'Más recientes' },
  { value: 'price-asc', label: 'Menor precio' },
  { value: 'price-desc', label: 'Mayor precio' },
  { value: 'name', label: 'Alfabético' },
];

export function FiltersSidebar({ totalProducts, uniqueOrigins }: FiltersSidebarProps) {
  const filters = useProductFilters();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <>
      {/* Mobile Filters */}
      <div className="lg:hidden w-full">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full">
              <Sliders className="mr-2 h-4 w-4" />
              Filtros
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px]">
            <SheetHeader>
              <SheetTitle>Filtros</SheetTitle>
              <SheetDescription>
                Refina tu búsqueda de productos
              </SheetDescription>
            </SheetHeader>
            <div className="mt-4 space-y-6">
              {renderFilters()}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Filters */}
      <div className="hidden lg:block w-[300px] flex-shrink-0">
        <div className="sticky top-4 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-amber-900">Filtros</h2>
            <Badge variant="secondary">
              {totalProducts} productos
            </Badge>
          </div>
          {renderFilters()}
        </div>
      </div>
    </>
  );

  function renderFilters() {
    return (
      <>
        {/* Search Input */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-amber-900">Buscar</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-amber-500" />
            <Input
              type="text"
              placeholder="Buscar productos..."
              value={filters.searchQuery}
              onChange={(e) => filters.setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-amber-900">Categoría</label>
          <Select
            value={filters.category}
            onValueChange={(value: any) => filters.setCategory(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecciona categoría" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas las categorías</SelectItem>
              <SelectItem value="coffee">Café</SelectItem>
              <SelectItem value="experience">Experiencias</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Roast Level Filter */}
        {filters.category !== 'experience' && (
          <div className="space-y-2">
            <label className="text-sm font-medium text-amber-900">Nivel de tostado</label>
            <Select
              value={filters.roastLevel}
              onValueChange={filters.setRoastLevel}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecciona nivel" />
              </SelectTrigger>
              <SelectContent>
                {roastLevels.map((level) => (
                  <SelectItem key={level.value} value={level.value}>
                    {level.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {/* Origin Filter */}
        {filters.category !== 'experience' && (
          <div className="space-y-2">
            <label className="text-sm font-medium text-amber-900">Origen</label>
            <Select
              value={filters.origin}
              onValueChange={filters.setOrigin}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecciona origen" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los orígenes</SelectItem>
                {uniqueOrigins.map((origin) => (
                  <SelectItem key={origin} value={origin}>
                    {origin}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {/* Price Range Filter */}
        <div className="space-y-4">
          <label className="text-sm font-medium text-amber-900">Rango de precio</label>
          <div className="px-2">
            <Slider
              value={[filters.priceRange[0], filters.priceRange[1]]}
              min={0}
              max={200000}
              step={1000}
              onValueChange={(value) => filters.setPriceRange([value[0], value[1]])}
              className="mt-2"
            />
          </div>
          <div className="flex items-center justify-between text-sm text-amber-600">
            <span>{formatPrice(filters.priceRange[0])}</span>
            <span>{formatPrice(filters.priceRange[1])}</span>
          </div>
        </div>

        {/* Sort By */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-amber-900">Ordenar por</label>
          <Select
            value={filters.sortBy}
            onValueChange={(value: any) => filters.setSortBy(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* In Stock Filter */}
        <div className="space-y-2">
          <Button
            variant={filters.inStock ? "default" : "outline"}
            onClick={() => filters.setInStock(!filters.inStock)}
            className="w-full"
          >
            {filters.inStock ? <Check className="mr-2 h-4 w-4" /> : null}
            Solo productos en stock
          </Button>
        </div>

        {/* Reset Filters */}
        <Button
          variant="ghost"
          onClick={filters.resetFilters}
          className="w-full text-amber-600 hover:text-amber-700"
        >
          <XCircle className="mr-2 h-4 w-4" />
          Limpiar filtros
        </Button>
      </>
    );
  }
}
