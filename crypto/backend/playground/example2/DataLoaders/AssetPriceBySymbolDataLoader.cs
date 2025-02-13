﻿namespace Demo.DataLoaders;

public sealed class AssetPriceBySymbolDataLoader : BatchDataLoader<string, AssetPrice>
{
  private readonly IDbContextFactory<AssetContext> _contextFactory;

  public AssetPriceBySymbolDataLoader(
    IDbContextFactory<AssetContext> contextFactory,
    IBatchScheduler batchScheduler,
    DataLoaderOptions? options = null)
    : base(batchScheduler, options)
  {
    _contextFactory = contextFactory ??
                      throw new ArgumentNullException(nameof(contextFactory));
  }

  protected override async Task<IReadOnlyDictionary<string, AssetPrice>> LoadBatchAsync(
    IReadOnlyList<string> keys,
    CancellationToken cancellationToken)
  {
    await using var context = await _contextFactory.CreateDbContextAsync(cancellationToken);
    return await context.AssetPrices.Where(t => keys.Contains(t.Symbol)).ToDictionaryAsync(t => t.Symbol!, cancellationToken);
  }
}