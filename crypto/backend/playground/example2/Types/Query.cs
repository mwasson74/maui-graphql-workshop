namespace Demo.Types;
public class Query
{
    [UsePaging]
    [UseFiltering]
    [UseSorting]
    public IQueryable<Asset> GetAssets(AssetContext context)
      => context.Assets.OrderBy(t => t.Symbol);
}