
using Demo.DataLoaders;

namespace Demo.Types;
[Node]
[ExtendObjectType(typeof(Asset))]
public sealed class AssetNode
{
  public async Task<AssetPrice> GetPriceAsync(
    [Parent] Asset asset,
    AssetPriceBySymbolDataLoader priceBySymbol,
    CancellationToken cancellationToken)
    => await priceBySymbol.LoadAsync(asset.Symbol!, cancellationToken);

  [NodeResolver]
  public async Task<Asset?> GetAssetByIdAsync(
    [ID(nameof(Asset))] int id,
    AssetByIdDataLoader assetById,
    CancellationToken cancellationToken)
    => await assetById.LoadAsync(id, cancellationToken);

  [BindMember(nameof(Asset.ImageKey))]
  public string? GetImageUrl([Parent] Asset asset, [Service] IHttpContextAccessor httpContextAccessor)
  {
    if (asset.ImageKey is null)
    {
      return null;
    }

    string? scheme = httpContextAccessor.HttpContext?.Request.Scheme;
    string? host = httpContextAccessor.HttpContext?.Request.Host.Value;
    if (scheme is null || host is null)
    {
      return null;
    }

    return $"{scheme}://{host}/images/{asset.ImageKey}";
  }
}