namespace Demo.Types;

using DataLoaders;

[Node]
[ExtendObjectType(typeof(AssetPrice), IgnoreProperties = new[] { nameof(AssetPrice.AssetId) })]
public sealed class AssetPriceNode
{
  public async Task<Asset> GetAssetAsync(
    [Parent] AssetPrice parent,
    AssetBySymbolDataLoader assetBySymbol,
    CancellationToken cancellationToken)
    => await assetBySymbol.LoadAsync(parent.Symbol!, cancellationToken);

  [NodeResolver]
  public static Task<AssetPrice> GetByIdAsyncAsync(
    int id,
    AssetPriceByIdDataLoader dataLoader,
    CancellationToken cancellationToken)
    => dataLoader.LoadAsync(id, cancellationToken);
}